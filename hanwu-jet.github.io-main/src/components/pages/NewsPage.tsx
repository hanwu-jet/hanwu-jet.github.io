'use client';

import { motion } from 'framer-motion';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { NewsPageConfig } from '@/types/page';

interface NewsPageProps {
  config: NewsPageConfig;
  embedded?: boolean;
}

export default function NewsPage({ config, embedded = false }: NewsPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="mb-8">
        <h1 className={`${embedded ? 'text-2xl' : 'text-4xl'} font-serif font-bold text-primary mb-4`}>
          {config.title}
        </h1>
        {config.description && (
          <p className={`${embedded ? 'text-base' : 'text-lg'} text-neutral-600 dark:text-neutral-500 max-w-2xl`}>
            {config.description}
          </p>
        )}
      </div>

      <div className="space-y-4">
        {config.news.map((item, index) => {
          const content = (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6">
                <div className="flex items-center gap-2 text-sm text-neutral-500 sm:w-28 sm:flex-shrink-0">
                  <CalendarIcon className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>

                <div className="flex-1">
                  <p className="text-base leading-7 text-neutral-500">
                    {item.content}
                  </p>

                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.content}
                      className="mt-4 w-full max-h-[500px] rounded-lg object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          );

          return (
            <motion.article
              key={`${item.date}-${index}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 sm:p-6 shadow-sm"
            >
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-accent transition-colors"
                >
                  {content}
                </a>
              ) : content}
            </motion.article>
          );
        })}
      </div>
    </motion.div>
  );
}
