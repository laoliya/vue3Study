import {defineComponent,ref} from 'vue'

export default defineComponent({
    setup(props){
        let title = ref('')
        let todos = ref([{ title: "学习 Vue 3", done: true },{ title: "睡觉", done: false }])
        function addTodo(){
            todos.value.push({
                title:title.value
            })
            title.value = ''
        }
        return ()=><div>
            <input type="text" vModel={title.value} />
            <button onClick={addTodo}>添加</button>
            <ul>
                {
                   todos.value.length ? todos.value.map((item)=>{
                      return  <li>{item.title}</li>
                    }) : <li>no datas</li>
                }
            </ul>
        </div>
    }
})