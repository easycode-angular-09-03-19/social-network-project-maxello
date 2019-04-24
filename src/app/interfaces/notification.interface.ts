export interface Notification {
    created_at: string;
    message: string;
    readed: boolean;
    url: string;
    user_creator_id: User;
    user_target_id: string;
    __v: number;
    _id: string;
}

interface User {
    avatar: string;
    _id: string;
    full_name: string;
}