import { Repository } from '../../src/types'
import { calculateLatestMostForkedRepos } from '../../src/utils'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'

function ForkedRepos({repositories}:{repositories:Repository[]}) {
    const mostForkedRepos = calculateLatestMostForkedRepos(repositories);
    // console.log(mostForkedRepos)

    const chartConfig = {
        repo:{
            label: 'Repository',
            color:'#000000'
        }
    } satisfies ChartConfig;
  return (
    <div>
        <h2 className="text-2xl font-semibold text-center mb-4">Forked Repos</h2>
        <ChartContainer config={chartConfig} className="h-100 w-full">
            <BarChart accessibilityLayer data={mostForkedRepos}>
                <CartesianGrid vertical={false}/>
                <XAxis dataKey='repo' tickLine={true} axisLine={false} tickMargin={10} tickFormatter={(value)=>value.slice(0,10)} />
                <YAxis dataKey='count' />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey='stars' fill='var(--color-language)' radius={8} />
            </BarChart>
        </ChartContainer>
    </div>
  )
}

export default ForkedRepos