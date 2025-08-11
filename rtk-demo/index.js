const store = require('./app/store');
const { ordered, restock } = require('./features/cake/cakeSlice');
const { iordered, irestock } = require('./features/icecream/icecreamSlice')
const {fetchuser} = require('./features/user/userSlice')

console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() =>{}
);

// store.dispatch(ordered());
// store.dispatch(ordered());
// store.dispatch(ordered());
// store.dispatch(restock(3));
// store.dispatch(iordered());
// store.dispatch(irestock(1))

store.dispatch(fetchuser())

unsubscribe();

