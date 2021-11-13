import {ExtensionContext} from 'vscode';

export function activate(context: ExtensionContext) {
  console.log(`unfolded.map: activated`);
}

export function deactivate() {
  console.log(`unfolded.map: deactivated`);
}
