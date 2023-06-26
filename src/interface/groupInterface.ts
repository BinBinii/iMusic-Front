export interface GroupInfo {
    id: Number,
    name: String,
    admin: Admin,
    create_time: Date,
    notice: String,
    users: GroupUserVo[]
}

export interface Admin {
    id: Number,
    email: String,
    password: String,
    image: String,
    nickname: String,
    status: Number
}

export interface GroupUserVo {
    id: Number,
    email: String,
    image: String,
    nickname: String,
    status: Number,
    isLogin: Number
}

export interface CreateGroupDto {
    name: String,
    admin: Number
}

export interface InviteGroupDto {
    groupId: Number,
    userIds: Number[]
}

export interface JoinGroupDto {
    groupId: Number,
    userId: Number
}