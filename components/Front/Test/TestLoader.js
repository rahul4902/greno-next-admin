import React from 'react'
import Skeleton from 'react-loading-skeleton'

const TestLoader = () => {
  return (
    <article className="gui-card gui-card--block test-card-container p-0 w-100 mb-4">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "20px",
                      }}
                    >
                      <div className="mb-4">
                        <Skeleton
                          baseColor="#eeeeee"
                          height={30}
                          width="67%"
                          circle={false}
                          enableAnimation={true}
                        />
                      </div>
                      <Skeleton
                        baseColor="#eeeeee"
                        height={20}
                        width="30%"
                        circle={false}
                        enableAnimation={true}
                      />
                      <Skeleton
                        baseColor="#eeeeee"
                        height={20}
                        width="100%"
                        circle={false}
                        enableAnimation={true}
                        className="mb-4"
                      />
                      <Skeleton
                        baseColor="#eeeeee"
                        height={20}
                        width="100%"
                        circle={false}
                        enableAnimation={true}
                      />
                      <Skeleton
                        baseColor="#eeeeee"
                        height={20}
                        width="70%"
                        circle={false}
                        enableAnimation={true}
                        className="mb-2"
                      />
                      <Skeleton
                        baseColor="#eeeeee"
                        height={20}
                        width="100%"
                        circle={false}
                        enableAnimation={true}
                      />
                      <Skeleton
                        baseColor="#eeeeee"
                        height={20}
                        width="20%"
                        circle={false}
                        enableAnimation={true}
                      />
                    </div>
                  </article>
  )
}

export default TestLoader
