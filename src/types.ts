export type LabelType = {
  id: 1 | 2 | 3;
  name: 'Need' | 'Want' | 'Routine';
};

export type TodoType = {
  id: number;
  label: LabelType;
  text: string;
  completed: boolean;
  createdAt: string;
};