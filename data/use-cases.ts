export type UseCase = {
  id: string;
  role: 'hr' | 'manager' | 'employee';
  sector?: string;
  titleTr: string;
  titleEn: string;
  problemTr: string;
  problemEn: string;
  solutionTr: string;
  solutionEn: string;
  resultTr: string[];
  resultEn: string[];
  screens: string[]; // ids from SCREENS
};

export const USE_CASES: UseCase[] = [
  {
    id: 'hr-engagement',
    role: 'hr',
    titleTr: 'Bağlılığı Artır',
    titleEn: 'Increase Engagement',
    problemTr: 'Çalışan bağlılığı düşük ve takdir az.',
    problemEn: 'Low engagement and recognition.',
    solutionTr: 'Peer-to-peer takdir ve ödüllendirme akışını başlatın.',
    solutionEn: 'Launch peer recognition and rewards feed.',
    resultTr: ['+185% memnuniyet', '-60% turnover'],
    resultEn: ['+185% satisfaction', '-60% turnover'],
    screens: ['recognition-feed','rewards']
  },
  {
    id: 'manager-performance',
    role: 'manager',
    titleTr: 'Performansı Yükselt',
    titleEn: 'Boost Performance',
    problemTr: 'Hedeflerin görünürlüğü düşük.',
    problemEn: 'Goals visibility is low.',
    solutionTr: 'Panelden KPI ve trendleri takip edin.',
    solutionEn: 'Track KPIs and trends via dashboard.',
    resultTr: ['+250% ekip performansı'],
    resultEn: ['+250% team performance'],
    screens: ['analytics-dashboard']
  }
];


