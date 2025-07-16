
import { cn } from "@/lib/utils";

interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  author: string;
  role: string;
  avatar?: string;
}

export function TestimonialCard({
  content,
  author,
  role,
  avatar,
  className,
  ...props
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "blockchain-card card-hover",
        className
      )}
      {...props}
    >
      <div className="mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="36"
          viewBox="0 0 45 36"
          fill="none"
          className="text-brand-purple/30"
        >
          <path
            d="M13.0909 36C9.05281 36 5.84949 34.6538 3.48089 31.9615C1.1123 29.2308 0 25.6923 0 21.3462C0 16.9231 1.54645 12.6923 4.63935 8.65385C7.73226 4.5769 11.6364 1.73077 16.3517 0.115385L19.6364 5.53846C16.7345 6.46154 14.2146 8.07692 12.0767 10.3846C10.0613 12.6923 9.05281 15 9.05281 17.3077C9.05281 18.6154 9.30651 19.7115 9.8139 20.5962C10.3213 21.4808 11.0852 21.9231 12.1053 21.9231C13.2479 21.9231 14.2655 21.5385 15.1581 20.7692C16.0508 19.9615 16.4971 18.7692 16.4971 17.1923C16.4971 16.0385 16.1981 15.0385 15.6002 14.1923C15.0022 13.3462 14.1989 12.9231 13.1903 12.9231H12.1053V7.5C15.7075 7.5 18.6005 8.63462 20.7843 10.9038C22.9682 13.1731 24.0601 16.0769 24.0601 19.6154C24.0601 24.0385 22.7647 27.5962 20.1739 30.2885C17.583 33.0192 15.2144 34.5 13.0909 36ZM34.0308 36C29.9927 36 26.7894 34.6538 24.4208 31.9615C22.0522 29.2308 21 25.6923 21 21.3462C21 16.9231 22.5464 12.6923 25.6394 8.65385C28.7323 4.5769 32.6364 1.73077 37.3517 0.115385L40.6364 5.53846C37.7345 6.46154 35.2146 8.07692 33.0767 10.3846C31.0613 12.6923 30.0528 15 30.0528 17.3077C30.0528 18.6154 30.3065 19.7115 30.8139 20.5962C31.3213 21.4808 32.0852 21.9231 33.1053 21.9231C34.2479 21.9231 35.2655 21.5385 36.1581 20.7692C37.0508 19.9615 37.4971 18.7692 37.4971 17.1923C37.4971 16.0385 37.1981 15.0385 36.6002 14.1923C36.0022 13.3462 35.1989 12.9231 34.1903 12.9231H33.1053V7.5C36.7075 7.5 39.6005 8.63462 41.7843 10.9038C43.9682 13.1731 45.0601 16.0769 45.0601 19.6154C45.0601 24.0385 43.7647 27.5962 41.1739 30.2885C38.583 33.0192 36.2144 34.5 34.0308 36Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <p className="mb-6 italic text-muted-foreground">{content}</p>
      <div className="flex items-center">
        {avatar ? (
          <div className="w-10 h-10 rounded-full overflow-hidden mr-4">
            <img src={avatar} alt={author} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-purple to-brand-teal flex items-center justify-center text-white mr-4">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-medium">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
}
