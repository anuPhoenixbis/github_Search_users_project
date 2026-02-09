import { Repository } from '../../src/types'
import { calculatePopularLanguages } from '../../src/utils'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'

function UsedLanguages({repositories}:{repositories:Repository[]}) {
    const popularLanguages = calculatePopularLanguages(repositories)
    // console.log(popularLanguages)

    const chartConfig = {
        language:{
            label: 'Language',
            color:'#2563eb'
        }
    } satisfies ChartConfig;
  return (
    <div>
        <h2 className="text-2xl font-semibold text-center mb-4">
            Used Languages
        </h2>
        <ChartContainer config={chartConfig} className='h-100 w-full'>
            <BarChart accessibilityLayer data={popularLanguages}>
                <CartesianGrid vertical={false} />
                <XAxis dataKey='language'tickLine={false} tickMargin={10} />
                <YAxis dataKey='count' />
                <Bar dataKey='count' fill='var(--color-language)' radius={8} />
                <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            </BarChart>
        </ChartContainer>
    </div>
  )
}

export default UsedLanguages