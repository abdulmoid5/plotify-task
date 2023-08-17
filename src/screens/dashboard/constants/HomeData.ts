export type HomeDataProps = Array<{
  id: number;
  title: string;
  isCompleted: boolean;
  child: Array<HomeDataItemProps>;
}>;

export type HomeDataItemProps = {
  id: number;
  text: string;
  selected: boolean;
};
export const HomeData: HomeDataProps = [
  {
    id: 1,
    title: 'Foundation',
    isCompleted: false,
    child: [
      {
        id: 1,
        text: 'Setup virtual office',
        selected: false,
      },
      {
        id: 2,
        text: 'Set mission & vision',
        selected: false,
      },
      {
        id: 3,
        text: 'Select business name',
        selected: false,
      },
      {
        id: 4,
        text: 'Buy domains',
        selected: false,
      },
    ],
  },
  {
    id: 2,
    title: 'Discovery',
    isCompleted: false,
    child: [
      {
        id: 1,
        text: 'Create roadmap',
        selected: false,
      },
      {
        id: 2,
        text: 'Competitor analysis',
        selected: false,
      },
    ],
  },
  {
    id: 3,
    title: 'Delivery',
    isCompleted: false,
    child: [
      {
        id: 1,
        text: 'Release marketing website',
        selected: false,
      },
      {
        id: 2,
        text: 'Release MVP',
        selected: false,
      },
    ],
  },
];
