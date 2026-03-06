export default function ReviewSkeleton() {
     http://localhost:3000/
     return (
          <article className="
            m-4
            max-w-50
            sm:w-150
            sm:max-w-150
            h-90
            sm:h-auto
            border
            rounded-xl
            flex
            flex-col
            sm:flex-row
            sm:even:flex-row-reverse
            border-accent
            overflow-hidden
            bg-parch
            skeleton">

               {/* Image placeholder */}
               <div className="
                w-50 
                min-h-50 
                shrink-0
                shimmer" />

               <div className="
                 px-2 
                 grid 
                 content-start 
                 w-full">

                    {/* Category + Score row */}
                    <div className="
                     my-1 
                     sm:my-2 
                     w-full 
                     flex 
                     justify-between 
                     items-center">
                         <div className="
                         h-6 
                         w-24 
                         rounded-full
                         shimmer" />
                         <div className="
                          h-6 
                          w-16 
                          rounded-full
                          shimmer" />
                    </div>

                    {/* Title */}
                    <div className="
                     h-8
                     w-3/4 
                     mt-1
                     rounded
                     shimmer" />

                    {/* Ingress */}
                    <div className="
                     my-1 
                     sm:my-2 
                     flex 
                     flex-col 
                     gap-2">
                         <div className="
                         h-4 
                         w-full 
                         rounded
                         shimmer" />
                         <div className="
                         h-4 
                         w-5/6 
                         rounded
                         shimmer" />
                    </div>

                    {/* Body */}
                    <div className="
                     flex 
                     flex-col 
                     gap-2">
                         <div className="
                         h-4 
                         w-full 
                         rounded
                         shimmer" />
                         <div className="
                         h-4 w-full 
                         rounded
                         shimmer" />
                         <div className="
                         h-4 
                         w-4/6 
                         rounded
                         shimmer" />
                    </div>

                    {/* Date */}
                    <div className="
                     h-3 
                     w-20 
                     mt-2 
                     ml-auto
                     rounded 
                     self-end 
                     shimmer" />

               </div>
          </article>
     )
}