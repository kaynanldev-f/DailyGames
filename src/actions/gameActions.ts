export async function getDailyGame() {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { next: { revalidate: 60 } },
    );
    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

export async function getAllGames() {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games`, {
      next: { revalidate: 60 },
    });
    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}
