/**
 * 从给定的 URL 中提取文件扩展名
 * @param url - 媒体文件的 URL
 * @returns 文件的扩展名，如果没有扩展名则返回空字符串
 */
export const getFileExtension = (path) => {
  // 使用正则提取文件后缀
  const match = path.match(/\.([a-zA-Z0-9]+)(\?|#|$)/)
  // 如果有匹配结果，返回后缀名，否则返回空字符串
  if (match) {
    return match[1]
  } else {
    console.error('无效URL')
    return ''
  }
}
