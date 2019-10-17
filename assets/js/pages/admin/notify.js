import { store } from 'react-notifications-component';

export default (title, message, type = 'success', duration = 3000) => {
    store.addNotification({
        title,
        message,
        type,
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "flipInY"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
            duration,
        }
    });
};
