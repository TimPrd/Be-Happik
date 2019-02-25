import AngryIcon from '../../assets/img/icons/Icon-Angry.svg';
import BigSmileIcon from '../../assets/img/icons/Icon-BigSmile.svg';
import NeutralIcon from '../../assets/img/icons/Icon-Neutral.svg';
import SadIcon from '../../assets/img/icons/Icon-Sad.svg';
import SmileIcon from '../../assets/img/icons/Icon-Smile.svg';

const surveyMock = {
  author: 'Super Manager',
  survey: {
    id: 1,
    title: 'Future Interactions Officer',
    description: null,
    startDate: '2019-02-09T17:28:37.397Z',
    endDate: '2019-02-25T17:28:37.397Z',
    open: false,
    createdAt: '2019-02-09T17:28:37.397Z',
    updatedAt: '2019-02-09T17:28:37.397Z',
    AuthorId: undefined,
  },
  questions: [
    {
      UserId: null,
      createdAt: '2019-02-09T17:28:37.335Z',
      description: 'Sit incidunt aut minus voluptas libero quam.',
      id: 5,
      predefined: true,
      title: 'Internal Applications Liaison',
      updatedAt: '2019-02-09T17:28:37.335Z',
    },
    {
      UserId: null,
      createdAt: '2019-02-09T17:28:37.335Z',
      description: 'Sit incidunt aut minus voluptas libero quam.',
      id: 5,
      predefined: true,
      title: 'Internal Applications Liaison',
      updatedAt: '2019-02-09T17:28:37.335Z',
    },
    {
      UserId: null,
      createdAt: '2019-02-09T17:28:37.335Z',
      description: 'Sit incidunt aut minus voluptas libero quam.',
      id: 5,
      predefined: true,
      title: 'Internal Applications Liaison',
      updatedAt: '2019-02-09T17:28:37.335Z',
    },
    {
      UserId: null,
      createdAt: '2019-02-09T17:28:37.335Z',
      description: 'Sit incidunt aut minus voluptas libero quam.',
      id: 5,
      predefined: true,
      title: 'Internal Applications Liaison',
      updatedAt: '2019-02-09T17:28:37.335Z',
    },
  ],
};

const allMoods = [
  {
    title: 'Très satisfait',
    mood: 100,
    icon: BigSmileIcon,
    isChecked: false,
  },
  {
    title: 'Satisfait',
    mood: 75,
    icon: SmileIcon,
    isChecked: false,
  },
  {
    title: 'Indifférent',
    mood: 50,
    icon: NeutralIcon,
    isChecked: false,
  },
  {
    title: 'Insatisfait',
    mood: 25,
    icon: SadIcon,
    isChecked: false,
  },
  {
    title: 'Très insatisfait',
    mood: 0,
    icon: AngryIcon,
    isChecked: false,
  },
];

export { surveyMock, allMoods };
