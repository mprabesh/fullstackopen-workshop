import { DiaryEntry } from "../src/types";
import { Weather, Visibility } from "../src/types";
const diaryEntries: DiaryEntry[] = [
  {
    id: 1,
    date: "2017-01-01",
    weather: Weather.Sunny,
    visibility: Visibility.POOR,
    comment: "Pretty scary flight, I'm glad I'm alive",
  },
  {
    id: 2,
    date: "2017-04-01",
    weather: Weather.Sunny,
    visibility: Visibility.GOOD,
    comment: "Everything went better than expected, I'm learning much",
  },
];

export default diaryEntries;
