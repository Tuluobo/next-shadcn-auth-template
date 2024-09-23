# Next.js 全栈项目模板

这是一个基于 [Next.js](https://nextjs.org/) 的全栈项目模板，集成了 [shadcn/ui](https://ui.shadcn.com/)、[Auth.js](https://authjs.dev/) 和 [Prisma](https://www.prisma.io/)。

## 特性

- **Next.js**: React 框架，用于构建现代化的 Web 应用
- **shadcn/ui**: 可定制的 UI 组件库
- **Auth.js**: 灵活的身份验证解决方案
- **Prisma**: 下一代 ORM，用于数据库操作

## 快速开始

### 创建你自己的项目

1. 使用这个模板创建新项目：

```bash
npx create-next-app@latest -e https://github.com/Tuluobo/next-shadcn-auth-template --use-pnpm your-project-name
```

2. 进入项目目录：

```bash
cd your-project-name
```

3. 安装依赖：

```bash
pnpm install
```

4. 设置环境变量：
   复制 `.env.example` 文件并重命名为 `.env`，然后填写必要的环境变量。

5. 初始化数据库：

```bash
pnpm exec prisma db push
```

### 运行开发服务器

```bash
pnpm dev
# 或
pnpm turbo
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

你可以通过修改 `src/app/page.tsx` 来开始编辑页面。当你编辑文件时，页面会自动更新。

## 部署

### Vercel 部署

这个项目可以很容易地部署到 Vercel 平台。

1. 在 GitHub 上 fork 这个仓库。
2. 在 Vercel 上创建一个新项目，并选择你 fork 的仓库。
3. 在部署设置中，确保环境变量已正确设置。
4. 点击 "Deploy" 按钮。

Vercel 会自动检测这是一个 Next.js 项目，并为你配置构建设置。

### Docker Compose 部署

你可以使用 Docker Compose 来部署这个项目。

1. 项目中已经创建了 `docker-compose.yml` 文件，你可以根据自己的情况调整 `docker-compose.yml` 文件。

2. 构建并启动容器：

```bash
docker compose up -d
```

现在，你可以在 `http://localhost:3000` 访问你的应用。

## 学习更多

要了解更多关于 Next.js 的信息，请查看以下资源：

- [Next.js 文档](https://nextjs.org/docs) - 了解 Next.js 的特性和 API。
- [学习 Next.js](https://nextjs.org/learn) - 一个交互式的 Next.js 教程。

你可以查看 [Next.js GitHub 仓库](https://github.com/vercel/next.js/) - 欢迎您的反馈和贡献！

## 贡献

我们欢迎所有形式的贡献，无论是新功能、bug 修复还是文档改进。请遵循以下步骤：

1. Fork 这个仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

## 问题反馈

如果你遇到任何问题或有改进建议，请在 GitHub 仓库中开启一个 issue。

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。
