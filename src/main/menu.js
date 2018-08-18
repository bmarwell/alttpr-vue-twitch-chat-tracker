const {app} = require('electron');

/** main app menu */
class AppMenu {
  /** construct main Menu template.
   * @return {Array} the menu template.
   */
  static mainMenu() {
    const template = [
      {
        label: 'File',
        submenu: [
          {label: 'Connect to Twitch…'},
          {label: 'Disconnect from Twitch'},
          {label: 'Settings'},
          {type: 'separator'},
          {role: 'quit'},
        ],
      },
      {
        label: 'Edit',
        submenu: [
          {role: 'undo'},
          {role: 'redo'},
        ],
      },
      {
        label: 'View',
        submenu: [
          {role: 'reload'},
          {role: 'forcereload'},
          {role: 'toggledevtools'},
          {type: 'separator'},
          {role: 'resetzoom'},
          {role: 'zoomin'},
          {role: 'zoomout'},
          {type: 'separator'},
          {role: 'togglefullscreen'},
        ],
      },
      {
        role: 'window',
        submenu: [
          {role: 'minimize'},
          {role: 'close'},
        ],
      },
      {
        role: 'help',
        submenu: [
          {
            label: 'SourceCode @ Github',
            click() {
              require('electron').shell.openExternal('https://github.com/bmhm/alttpr-vue-twitch-chat-tracker');
            },
          },
          {
            label: 'ElectronJs',
            click() {
              require('electron').shell.openExternal('https://electronjs.org');
            },
          },
        ],
      },
    ];

    if (process.platform === 'darwin') {
      template.unshift({
        label: app.getName(),
        submenu: [
          {role: 'about'},
          {type: 'separator'},
          {role: 'services', submenu: []},
          {type: 'separator'},
          {role: 'hide'},
          {role: 'hideothers'},
          {role: 'unhide'},
          {type: 'separator'},
          {role: 'quit'},
        ],
      });

      // Edit menu
      template[1].submenu.push(
        {type: 'separator'},
        {
          label: 'Speech',
          submenu: [
            {role: 'startspeaking'},
            {role: 'stopspeaking'},
          ],
        }
      );

      // Window menu
      template[3].submenu = [
        {role: 'close'},
        {role: 'minimize'},
        {role: 'zoom'},
        {type: 'separator'},
        {role: 'front'},
      ];
    }

    return template;
  }
}


export default AppMenu;
