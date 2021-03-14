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
            { text: '前端入门', link: '/getting-started/' },
            { text: '前端项目开发', link: '/project-develop/' },
            { text: '前端项目优化', link: '/project-improve/' },
            { text: '前端面试', link: '/interview/' },
            { text: '其他资源', link: '/playground' },
            { text: '参与贡献', link: '/how-to-contribute' },
        ],
        sidebar: {
            '/getting-started/': [
                {
                    title: '前端基本技能',
                    collapsable: true,
                    children: [{
                        title: 'HTML',
                        collapsable: true,
                        children: [
                            '/getting-started/basic-skills/html/basic-grammar.md',
                        ]
                    }, {
                        title: 'CSS',
                        collapsable: true,
                        children: [
                            '/getting-started/basic-skills/css/box-model.md',
                        ]
                    }, {
                        title: 'JavaScript',
                        collapsable: true,
                        children: [
                            '/getting-started/basic-skills/javascript/basic-grammar.md',
                        ]
                    }]
                }, {
                    title: '前端基本知识',
                    collapsable: true,
                    children: [{
                        title: '浏览器',
                        collapsable: true,
                        children: [
                            '/getting-started/basic-knowledge/browser/dom-events.md',
                        ]
                    }, {
                        title: 'HTTP/Ajax',
                        collapsable: true,
                        children: [
                            '/getting-started/basic-knowledge/http/http-request.md',
                        ]
                    }, {
                        title: 'Node.js',
                        collapsable: true,
                        children: [
                            '/getting-started/basic-knowledge/nodejs/demo.md',
                        ]
                    }, {
                        title: 'Web安全',
                        collapsable: true,
                        children: [
                            '/getting-started/basic-knowledge/security/xss.md',
                        ]
                    }]
                }
            ], 
            '/project-develop/': [
                {
                    title: '项目基本知识',
                    collapsable: true,
                    children: [
                        '/project-develop/project-knowledge/develop-process.md',
                    ]
                }, {
                    title: '项目技术栈',
                    collapsable: true,
                    children: [{
                        title: '前端框架',
                        collapsable: true,
                        children: [
                            '/project-develop/project-technology/framework/vue.md',
                        ]
                    }, {
                        title: '小程序开发',
                        collapsable: true,
                        children: [
                            '/project-develop/project-technology/miniprogram/wechat.md',
                        ]
                    }, {
                        title: '前端应用',
                        collapsable: true,
                        children: [
                            '/project-develop/project-technology/application/module.md',
                        ]
                    }, {
                        title: '前端构建',
                        collapsable: true,
                        children: [
                            '/project-develop/project-technology/build/webpack.md',
                        ]
                    }]
                }
            ], 
            '/project-improve/': [
                {
                    title: '前端测试',
                    collapsable: true,
                    children: [
                        '/project-improve/project-test/unit.md',
                    ]
                }, {
                    title: '前端发布',
                    collapsable: true,
                    children: [
                        '/project-improve/project-publish/demo.md',
                    ]
                }, {
                    title: '前端工程化',
                    collapsable: true,
                    children: [
                        '/project-improve/project-engineer/demo.md',
                    ]
                }, {
                    title: '性能提升',
                    collapsable: true,
                    children: [
                        '/project-improve/performance-improve/demo.md',
                    ]
                }, {
                    title: '开发效能提升',
                    collapsable: true,
                    children: [
                        '/project-improve/develop-efficiency-improve/demo.md',
                    ]
                }, {
                    title: '设计模式',
                    collapsable: true,
                    children: [
                        '/project-improve/design-pattern/demo.md',
                    ]
                }
            ], 
            '/interview/': [
                {
                    title: '面试题库',
                    collapsable: true,
                    children: [
                        '/interview/question-bank/demo.md',
                    ]
                }, {
                    title: '面试准备参考',
                    path: 'https://godbasin.github.io/front-end-playground/front-end-work/interview/interview-1-ready.html'
                }
            ]
        }
    },

};