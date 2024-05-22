module.exports = {
    title: '前端的世界',
    base: '/front-end-world/',
    shouldPrefetch: () => false,
    description: '来自前端的进击团队',
    themeConfig: {
        // logo: '/assets/img/logo.png',
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'front-end-fighting/front-end-world',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'Github',
    
        // 以下为可选的编辑链接选项
    
        // 假如你的文档仓库和项目本身不在一个仓库：
        // docsRepo: 'vuejs/vuepress',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'sourcecode',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '我想完善该文章！',
        nav: [
            { text: '概述', link: '/' },
            { text: '内容', link: '/getting-started/' },
            { text: '其他资源', link: '/playground' },
            { text: '参与贡献', link: '/how-to-contribute' },
        ],
        sidebar: {
            '/getting-started/': [
                {
                    title: '第 1 章 前端必备知识与技能',
                    collapsable: true,
                    children: [{
                        title: '1.1 前端都能做些什么',
                        collapsable: true,
                        children: [
                            '/getting-started/1.md',
                        ]
                    }, {
                        title: '1.2 基础知识的具备',
                        collapsable: true,
                        children: [
                            '/getting-started/2/2.1.md',
                            '/getting-started/2/2.2.md',
                            '/getting-started/2/2.3.md',
                            '/getting-started/2/2.4.md',
                            '/getting-started/2/2.5.md',
                            '/getting-started/2/2.6.md',
                            '/getting-started/2/2.7.md',
                        ]
                    }, {
                        title: '1.3 前端基础开发技巧',
                        collapsable: true,
                        children: [
                            '/getting-started/3/3.1.md',
                            '/getting-started/3/3.2.md',
                            '/getting-started/3/3.3.md',
                        ]
                    }]
                }
            ], 
        }
    },

};