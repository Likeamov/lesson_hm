// 引入OpenAI 模块
// AI 模块 es6 推出的模块化能力
import OpenAI from 'openai';
//实例化Openai
const openai = new OpenAI({
    //付费
    apiKey: 'sk-5PUDrQhFqCVr0KluhSbYcCgIx6S21dNcxGJOxhpo3BEtIhRw',
    //国内转发
    baseURL:'http://api.302.ai/v1'
    
});

const response = await openai.completions.create({
    model:'gpt-3.5-turbo-instruct',
    max_tokens:256,
    prompt:'假如你是周杰伦这样的爱情歌曲作词大家，请你写一首主题为爱上森林北的摇滚歌曲。森林北是一位美丽，洒脱，有活力的女孩。'

})
console.log(response)

