import { ElButton, ElDialog, ElMessage } from "element-plus";
// 引入类型，加上 type
import type { App } from "vue"

const setupElementPlus = (app: App) => {
    app.use(ElButton)
    app.use(ElDialog)
    app.use(ElMessage)
}

export default setupElementPlus