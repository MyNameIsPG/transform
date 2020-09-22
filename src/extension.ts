import * as vscode from 'vscode';
import { translate } from "./api";

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('pg-transform.transform', async () => {
		const currentEditor: any = vscode.window.activeTextEditor;
		if (currentEditor) {
			const currentSelect = currentEditor.document.getText(currentEditor.selection);
			const res = await translate({ q: currentSelect });
			if (res.status === 200) {
				const value: string = res.data.trans_result[0].dst;
				vscode.window.activeTextEditor?.edit(editBuilder => {
					const currentEditor: any = vscode.window.activeTextEditor;
					return editBuilder.replace(currentEditor.selection, value);
				})
			}
		} else {
			vscode.window.showInformationMessage('请选择数据');
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }