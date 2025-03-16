const config = {
  locales: [
    'zh-Hans',
  ],
  translations: {
    'zh-Hans': {
      'app.components.LeftMenu.navbrand.title': '控制面板',
      'app.components.LeftMenu.navbrand.workplace': '工作区',
      'Auth.form.welcome.title': '欢迎！',
      'Auth.form.welcome.subtitle': '登录到您的账户',
      'global.plugins': '插件',
      'global.settings': '设置',
      'global.marketplace': '插件市场',
      'Settings.profile.form.section.experience.interfaceLanguage': '界面语言',
      'Settings.profile.form.section.experience.interfaceLanguage.hint': '这将只更改您的界面语言。',
      'Settings.profile.form.section.experience.title': '体验设置'
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
}; 