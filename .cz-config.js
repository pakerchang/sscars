module.exports = {
	types: [
		{ value: "feat", name: "feat: 增加" },
		{ value: "fix", name: "fix: bug fix" },
		{ value: "style", name: "style: 樣式修改(不影響)" },
		{ value: "docs", name: "docs: 修改文件" },
		{ value: "refactor", name: "refactor: 重構" },
	],
	scopes: [{ name: "Components" }, { name: "Styles(CSS)" }, { name: "Deps" }, { name: "Documents" }, { name: "Other" }],
	messages: {
		type: "選擇更改類型:\n",
		// 如果allow custom scopes为true，则使用
		scope: "選擇 scope（Options）：\n",
		customScope: "請輸入自定義的 scope：",
		subject: "簡述:\n",
		body: '詳細描述. 使用"|"換行:\n',
		breaking: "Breaking Changes列表:\n",
		footer: "關閉的issues列表. E.g.: #31, #34:\n",
		confirmCommit: "確定送出?",
	},
	allowCustomScopes: true,
	allowBreakingChanges: ["feat", "fix"],
};
