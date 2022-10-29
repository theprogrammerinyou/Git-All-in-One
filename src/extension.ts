import * as vscode from "vscode";
import { SidebarProvider } from "./SidebarProvider";

export function activate(context: vscode.ExtensionContext) {

  const sidebarProvider = new SidebarProvider(context.extensionUri);

  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider("gitAllInOne-sidebar", sidebarProvider)
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("gitAllInOne.helloWorld", () => {
      vscode.window.showInformationMessage("hello world");
    }));
}

// this method is called when your extension is deactivated
export function deactivate() {}
