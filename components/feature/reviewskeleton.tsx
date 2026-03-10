export default function ReviewSkeleton() {
     return (
          <article className="
            m-4
            max-w-50
            sm:w-150
            sm:max-w-150
            border
            rounded-xl
            border-accent
            overflow-hidden
            bg-parch">
               <div className="
                    flex
                    flex-col
                    sm:flex-row
                    items-start">
                    {/* Image placeholder */}
                    <div className="
                w-50 
                min-h-50 
                shrink-0
                shimmer">
                         <img src="/images/placeholder.svg" className="
                opacity-40
                -z-10" />
                    </div>
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

                    </div>
               </div>
               {/* Body */}
               <div className="
                    m-2
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
                     m-2 
                     ml-auto
                     rounded 
                     self-end 
                     shimmer" />


          </article >
     )
}