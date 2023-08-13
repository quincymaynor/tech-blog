module.exports = {
  format_date: (date) => {
    // date format MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  ifEq: (arg1, arg2, options) => {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
  },
  ifNEq: (arg1, arg2, options) => {
    return (arg1 != arg2) ? options.fn(this) : options.inverse(this);
  },
  build_comment_tree: (comments, logged_in_user) => {
    const buildTree = (comments, parent_id = null, level = 2) =>
      comments.filter(comment => comment.parent_comment_id === parent_id)
        .map((child) => `<div class="pl-${level}">
          <details>
          <summary>${child.user.name}: ${child.comment} ${child.user.id === logged_in_user ?
            `<button class="btn btn-error delete-comment" id="${child.id}">delete</button>` :
            `<button class="btn btn-neutral add-comment" id="${child.id}">reply</button>`}
          </summary>
          ${buildTree(comments, child.id, level + 2)}
          </details>
        </div>`)

    return buildTree(comments).join("");
  }
};
