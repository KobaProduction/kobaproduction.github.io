import { defineBoot } from '#q-app/wrappers';
import { useWebAppHapticFeedback } from 'vue-tg'; // Предположим, что функции haptic feedback находятся в этом модуле

declare module 'vue' {
  interface telegramHapticFeedBack {
    $hapticFeedBackSuccess: () => void;
    $hapticFeedBackError: () => void;
  }
}

const hapticSuccess = function() : void {
  useWebAppHapticFeedback().notificationOccurred("success");
};
const hapticError = function(): void {
  useWebAppHapticFeedback().notificationOccurred("error");
};

export default defineBoot(({ app }) => {
  app.config.globalProperties.$hapticFeedBackSuccess = hapticSuccess()
  app.config.globalProperties.$hapticFeedBackError = hapticError()
});

export { hapticSuccess, hapticError }
