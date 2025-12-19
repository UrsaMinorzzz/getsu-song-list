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
		avatar: 'assets/Hana.jpg',
		avatarAlt: '姬路姬咲花',
		homepageUrl: 'http://space.bilibili.com/3546597585587017',
	},
	meta: {
		title: '咲花大小姐的歌单',
		description: 'bilibili主播姬路姬咲花的歌单。',
		keywords: ['歌单', 'VTuber', '静态网站', '音乐检索', '多语言搜索'],
		canonical: 'https://example.com/',
		ogImage: '/assets/background.jpg',
	},
	hero: {
		title: '姬路姬咲花的歌单',
		subtitle: '我是被马车创飞转生到这里的异世界天才大小姐/はな❀/每日直播时间17:00| ˙꒳¯ )\n 禁言通知群：101208094',
	},
	liveRoom: {
		enabled: true,
		roomId: 31702685,
		roomUrl: 'https://live.bilibili.com/{roomId}',
		// statusEndpoint: 'https://api.live.bilibili.com/room/v1/Room/get_info?room_id={roomId}',
		statusEndpoint: 'http://rei.monoteam.top/bili_proxy.php?room_id={roomId}',
		embedUrl: 'https://www.bilibili.com/blackboard/live/live-activity-player.html?cid={roomId}&quality=0',
		coverImage: '/assets/Hana.jpg',
		offlineCover: '/assets/Hana.jpg',
		pollIntervalMs: 60000,
	},
};


