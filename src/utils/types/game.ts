export interface GameProps {
  id: number;
  title: string;
  image_url: string;
  description: string;
  banner: string;
  created_at: string;
}

export interface GameDetailsProps {
  id: number;
  title: string;
  image_url: string;
  description: string;
  banner: string;
  release: string;
  platforms: [];
  categories: [];
}
