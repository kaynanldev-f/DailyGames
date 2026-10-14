export async function getDalyGame() {
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
