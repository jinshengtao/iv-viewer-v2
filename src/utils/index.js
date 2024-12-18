/**
 * 从给定的 URL 中提取文件扩展名
 * @param url - 媒体文件的 URL
 * @returns 文件的扩展名，如果没有扩展名则返回空字符串
 */
export const getFileExtension = (url) => {
  try {
    // 创建一个 URL 对象以解析输入的 URL
    const parsedUrl = new URL(url)
    const pathname = parsedUrl.pathname
    // 找到最后一个斜杠后的部分
    const lastSegment = pathname.substring(pathname.lastIndexOf('/') + 1)
    // 查找最后一个点的位置
    const lastDotIndex = lastSegment.lastIndexOf('.')
    // 如果存在点且点不是第一个字符，提取扩展名
    if (lastDotIndex > 0 && lastDotIndex < lastSegment.length - 1) {
      return lastSegment.substring(lastDotIndex + 1).toLowerCase()
    }
    // 如果没有扩展名，返回空字符串
    return ''
  } catch (error) {
    // 如果 URL 无效，抛出错误或返回空字符串
    console.error('无效的 URL:', error)
    return ''
  }
}
