import SideBar from "../partials/sidebar/SideBar"
import { PieChart } from '@mui/x-charts/PieChart';
import BarPlotGroup from "../partials/group/BarPlotGroup";
import TableItem from "../partials/group/TableItem";

const HomePage = () => {

  return (
    <>
      <div className="bg-base-color flex flex-row h-screen">
        <SideBar />
        <div className="flex flex-col flex-1 bg-base-color w-full h-full overflow-auto">
          <div className="flex flex-col xl:flex-row w-full gap-6 p-10">
            <div className="flex flex-col rounded-xl bg-white items-center hover:bg-black/5">
              <PieChart
                width={340}
                series={[
                  {
                    data: [
                      { id: 0, value: 15, label: 'Active Group' },
                      { id: 1, value: 10, label: 'Inactive Group' },
                    ],
                    highlightScope: { faded: 'global', highlighted: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                    innerRadius: 30,
                    outerRadius: 100,
                    paddingAngle: 3,
                    cornerRadius: 5,
                    startAngle: -90,
                    // endAngle: 180,
                    cx: 165,
                    cy: 140,

                  },
                ]}
                colors={['#21C121', '#FF0000']}
                slotProps={{
                  legend: {
                    direction: 'row',
                    position: { vertical: 'bottom', horizontal: 'middle' },
                    padding: 10,
                    // hidden: true
                    labelStyle: {
                      fontSize: 14,
                      fontFamily: 'rubik',
                      fill: 'grey',
                      fontWeight: 600,
                    },
                  },
                }}

              />
            </div>
            <div className="flex-1 flex flex-col">
              <div className="w-max bg-white rounded-xl">
                <BarPlotGroup />
              </div>
            </div>
          </div>
          <div className="w-full h-full p-10">
            <div className="md:w-full w-max h-full flex flex-col gap-2">
              <ul className="flex gap-1 text-black/40 lg:text-xl text-base font-rubik font-medium px-4 pointer-events-none">
                <li className="flex-1">Name</li>
                <li className="flex-1">Status</li>
                <li className="flex-1">Started</li>
                <li className="flex-1">Expired</li>
                <li className="flex-1">Time</li>
              </ul>
              <div className="flex flex-col gap-7">
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
                <TableItem />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
