/**
 * 站点基础配置，包括展示头像等主题信息。
 */
export interface SiteProfileConfig {
	/**
	 * 头像地址，指向 `public` 目录下的静态资源。
	 * 允许 jpg/png/webp 等常见格式。
	 */
	avatar: string;
	/** 头像的替代文本，利于可访问性。 */
	avatarAlt: string;
	/** 个人主页链接，头像点击后跳转到该地址。 */
	homepageUrl: string;
}

export interface HeroContentConfig {
	/** 页面主标题。 */
	title: string;
	/** 标题下方的描述文案。 */
	subtitle: string;
}

export interface LiveRoomConfig {
	/** 是否启用直播间功能。 */
	enabled: boolean;
	/** 直播间 ID，通常为数值。 */
	roomId: number;
	/** 跳转到直播间的链接。 */
	roomUrl: string;
	/**
	 * 拉取直播状态的接口模板，使用 `{roomId}` 作为占位符。
	 * 示例：`https://api.live.bilibili.com/room/v1/Room/get_info?room_id={roomId}`
	 */
	statusEndpoint: string;
	/**
	 * 直播 iframe 播放地址模板，使用 `{roomId}` 占位。
	 * 可留空以禁用浮窗播放。
	 */
	embedUrl?: string;
	/** 默认封面图，若接口未提供则回退使用。 */
	coverImage?: string;
	/** 未开播时的封面图。 */
	offlineCover?: string;
	/** 定时轮询间隔，单位毫秒。0 表示仅初次请求。 */
	pollIntervalMs: number;
}

export interface SiteMetaConfig {
	/** 浏览器标签页标题。 */
	title: string;
	/** 默认页面描述。 */
	description: string;
	/** 页面关键词列表。 */
	keywords: string[];
	/** 规范化链接（canonical）。 */
	canonical: string;
	/** Open Graph 图片地址。 */
	ogImage?: string;
}

export interface SiteConfig {
	profile: SiteProfileConfig;
	meta: SiteMetaConfig;
	hero: HeroContentConfig;
	liveRoom?: LiveRoomConfig;
}

export const siteConfig: SiteConfig = {
	profile: {
		avatar: 'assets/Getsu.jpg',
		avatarAlt: '堇月Getsu',
		homepageUrl: 'https://space.bilibili.com/3546781036055061',
	},
	meta: {
		title: '堇月Getsu的歌单',
		description: 'bilibili主播堇月Getsu的歌单。',
		keywords: ['歌单', 'VTuber', '静态网站', '音乐检索', '多语言搜索'],
		canonical: 'https://ursaminorzzz.github.io/getsu-song-list/',
		ogImage: '/assets/background.jpg',
	},
	hero: {
		title: '堇月Getsu的歌单',
		subtitle: '和使魔大人一起冒险中，目标是成为最厉害的女巫！',
	},
	liveRoom: {
		enabled: true,
		roomId: 1736197007,
		roomUrl: 'https://live.bilibili.com/{roomId}',
		statusEndpoint: 'https://api.live.bilibili.com/room/v1/Room/get_info?room_id={roomId}',
		// statusEndpoint: 'http://rei.monoteam.top/bili_proxy.php?room_id={roomId}',
		embedUrl: 'https://www.bilibili.com/blackboard/live/live-activity-player.html?cid={roomId}&quality=0',
		coverImage: '/assets/Getsu.jpg',
		offlineCover: '/assets/Getsu.jpg',
		pollIntervalMs: 60000,
	},
};


