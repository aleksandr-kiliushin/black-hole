export type TLeaderboardItems = {
  data: {
    userID: number;
    userDisplayName: string;
    userAvatar: string | null;
    score: string;
    consumedEnemies: number;
  };
};
