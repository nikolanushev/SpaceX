const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema');
const app = express();

app.use(cors());

app.use('/graphql',
    graphqlHTTP({
        schema,
        graphql: true
    })
)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`))

//56:04 on yt video    
//https://www.youtube.com/watch?v=HmnseYbAJgw