/*
 * @Author: xiawang1024
 * @Date: 2021-05-27 08:37:00
 * @LastEditTime: 2021-06-11 22:24:48
 * @LastEditors: xiawang1024
 * @Description:判断是否在可视区hooks
 * @FilePath: /next-ssr/hooks/useOnScroll.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

import { useState, useEffect } from 'react'

const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    )

    observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect()
    }
  }, [])

  return isIntersecting
}

export default useOnScreen
