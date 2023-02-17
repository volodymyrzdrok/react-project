export const data = Array.from({ length: 15 }, () => ({
  id: Math.random().toString(36).substring(7),
  balanceAfter: Math.floor(Math.random() * 10000),
  category: 'random',
  amount: Math.floor(Math.random() * 100),
  comment: 'lorem ipsum',
  type: Math.random() > 0.5 ? 'INCOME' : 'EXPENSE',
  transactionDate: new Date().toLocaleDateString(),
}));
