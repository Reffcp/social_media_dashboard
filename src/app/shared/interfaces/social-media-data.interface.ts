export interface SocialMediaDataInterface {
  overview_today: OverviewTodayInterface;
  top_data: TopDataInterface;
}

export interface OverviewTodayInterface {
  facebook: OverviewTodayItemInterface;
  instagram: OverviewTodayItemInterface;
  twitter: OverviewTodayItemInterface;
  youtube: OverviewTodayItemInterface;
}

export interface OverviewTodayItemInterface {
  icon: string;
  likes: { total_likes: number; new_likes: number };
  page_viewers: { total_page_viewers: number; new_page_viewers: number };
}

export interface TopDataInterface {
  facebook: TopDataItemInterface;
  instagram: TopDataItemInterface;
  twitter: TopDataItemInterface;
  youtube: TopDataItemInterface;
}

export interface TopDataItemInterface {
  icon: string;
  new_followers: number;
  total_followers: number;
  username: string;
}
