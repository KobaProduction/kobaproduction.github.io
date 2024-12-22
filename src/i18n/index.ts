import enUS from './en-US';
import ruRU from './ru-RU';

interface Messages {
    [key: string]: { [key: string]: string };
}

const messages: Messages = {
    'en-US': enUS,
    'ru-RU': ruRU,
};

export default messages;
