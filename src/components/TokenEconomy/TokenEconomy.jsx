import React from "react";

const TokenEconomy = () => {
  return (
    <div className="w-full mb-32">
      <h2 className="text-textcolor font-rubik font-bold text-center text-[2.5em] pb-12">
        Token Economy
      </h2>
      <table class="table-auto text-[#ffffff]  w-5/6 mx-auto">
        <tbody>
          <tr className="bg-[#F573CD]">
            <td className="py-3 px-2 font-bold"></td>
            <td className="py-3 px-2 font-bold">Allocation</td>
            <td className="py-3 px-2 font-bold">Token</td>
            <td className="py-3 px-2 font-bold">Value</td>
            <td className="py-3 px-2 font-bold">Vesting</td>
          </tr>
          <tr>
            <td className="py-3 px-2 font-bold">Public</td>
            <td className="py-3 px-2 font-bold">15%</td>
            <td className="py-3 px-2 font-bold">15,000,000</td>
            <td className="py-3 px-2 font-bold">$300,000</td>
            <td className="py-3 px-2 font-bold"></td>
          </tr>
          <tr className="bg-[#738CF5]">
            <td className="py-3 px-2 font-bold">Team</td>
            <td className="py-3 px-2 font-bold">10%</td>
            <td className="py-3 px-2 font-bold">10,000,000</td>
            <td className="py-3 px-2 font-bold">$200,000</td>
            <td className="py-3 px-2 font-bold">
              12 Months cliff linear vesting over 24months
            </td>
          </tr>
          <tr>
            <td className="py-3 px-2 font-bold">Advisor</td>
            <td className="py-3 px-2 font-bold">5%</td>
            <td className="py-3 px-2 font-bold">5,000,000</td>
            <td className="py-3 px-2 font-bold">$100,000</td>
            <td className="py-3 px-2 font-bold">
              12 Months cliff linear vesting over 24months
            </td>
          </tr>
          <tr className="bg-[#738CF5]">
            <td className="py-3 px-2 font-bold">Marketing/Media</td>
            <td className="py-3 px-2 font-bold">20%</td>
            <td className="py-3 px-2 font-bold">20,000,000</td>
            <td className="py-3 px-2 font-bold">$400,000</td>
            <td className="py-3 px-2 font-bold">
              Linear vesting Over 24months
            </td>
          </tr>
          <tr>
            <td className="py-3 px-2 font-bold">LP</td>
            <td className="py-3 px-2 font-bold">25%</td>
            <td className="py-3 px-2 font-bold">25,000,000</td>
            <td className="py-3 px-2 font-bold">$500,000</td>
            <td className="py-3 px-2 font-bold">Ondemand</td>
          </tr>
          <tr className="bg-[#738CF5]">
            <td className="py-3 px-2 font-bold">Ecosystem</td>
            <td className="py-3 px-2 font-bold">25%</td>
            <td className="py-3 px-2 font-bold">25,000,000</td>
            <td className="py-3 px-2 font-bold">$500,000</td>
            <td className="py-3 px-2 font-bold">Ondemand</td>
          </tr>
          <tr>
            <td className="py-3 px-2 font-bold"></td>
            <td className="py-3 px-2 font-bold"></td>
            <td className="py-3 px-2 font-bold">100,000,000</td>
            <td className="py-3 px-2 font-bold">2,000,000</td>
            <td className="py-3 px-2 font-bold"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TokenEconomy;
