module.exports = {
    prompts: [
        {
            type: 'input',
            required: true,
            name: 'devPort',
            message: '请输入子项目的端口号：',
            validate: (val) => {
                if (Number.isNaN(+val)) {
                    return '请输入正确的数字！'
                }
                return true
            }
        }
    ]
}
