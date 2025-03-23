module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
  language: 'zh-Hans',
  translations: {
    'zh-Hans': {
      'Auth.form.welcome.title': '欢迎使用',
      'Auth.form.welcome.subtitle': '登录到您的账户',
      'app.components.LeftMenu.navbrand.title': '控制面板',
      'app.components.LeftMenu.navbrand.workplace': '工作区',
      'global.plugins': '插件',
      'global.settings': '设置',
      'global.marketplace': '插件市场',
      'Settings.profile.form.section.experience.interfaceLanguage': '界面语言',
      'Settings.profile.form.section.experience.interfaceLanguage.hint': '这将只更改您的界面语言。',
      'Settings.profile.form.section.experience.title': '体验'
    },
  },
});
