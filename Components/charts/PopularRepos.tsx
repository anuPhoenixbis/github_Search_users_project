import { Repository } from "../../src/types"
import { calculateLatestMostStarredRepos } from "../../src/utils"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'

function PopularRepos({repositories}:{repositories:Repository[]}) {
    const popularRepos = calculateLatestMostStarredRepos(repositories);

    const chartConfig = {
        repo:{
            label: 'Repository',
            color:'#8322f9'
        }
    } satisfies ChartConfig;
  return (
    <div>
        <h2 className="text-2xl font-semibold text-center mb-4">Popular Repos</h2>
        <ChartContainer config={chartConfig} className="h-100 w-full">
            <BarChart accessibilityLayer data={popularRepos}>
                <CartesianGrid vertical={false}/>
                <XAxis dataKey='repo' tickLine={false} tickMargin={10} tickFormatter={(value)=>value.slice(0,10)} />
                <YAxis dataKey='stars' />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey='stars' fill='var(--color-language)' radius={8} />
            </BarChart>
        </ChartContainer>
    </div>
  )
}

export default PopularRepos