import Redis from 'ioredis' // redis node js client

const redis = new Redis()
// key=>value NOSQL JSON 非关系型数据库
const initialData = {
    "1702459181837": '{"title":"sunt aut","content":"quia et suscipit suscipit recusandae","updateTime":"2023-12-13T09:19:48.837Z"}',
    "1702459182837": '{"title":"qui est","content":"est rerum tempore vitae sequi sint","updateTime":"2023-12-13T09:19:48.837Z"}',
    "1702459188837": '{"title":"ea molestias","content":"et iusto sed quo iure","updateTime":"2023-12-13T09:19:48.837Z"}'
  }
  // 列表
export async function getAllNotes(){
 // 使用redis.hgetall方法从Redis中获取'notes'哈希表的所有键值对
 // 这个方法返回一个对象，其中包含所有的笔记数据
 const data = await redis.hgetall('notes')
 
 // 检查返回的数据对象是否为空
 // 如果为空，说明Redis中还没有存储任何笔记数据
 if(Object.keys(data).length === 0 ){
    // 使用redis.hset方法将初始数据批量插入到'notes'哈希表中
    // initialData包含了预设的笔记数据，每个笔记都有一个时间戳作为键
    // 值是JSON字符串，包含标题、内容和更新时间
    await redis.hset('notes', initialData)
 }
 
 // 返回从Redis获取的所有笔记数据
 // 如果之前数据为空，则返回刚刚插入的初始数据
 return data
}