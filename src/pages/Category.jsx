import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { useAuth } from 'oidc-react';

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

function Category() {
  const auth = useAuth();
  const [userData, setUserData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);


const callApi = async () => {
    setLoading(true);
    try {
      // Get access token from auth object
      const token = auth.access_token;
      console.log(token);

      const response = await fetch('http://localhost:3000/api/expendiq/category', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Failed to fetch:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!auth.userData) {
    return <div>Loading authentication...</div>;
  }

  return (
    <>

    <div>
      <p>Hello {auth.profile ? auth.profile.name : "Unknown"}!</p>
      <button onClick={callApi} disabled={loading}>
        {loading ? 'Loading...' : 'Get User Data'}
      </button>
      {userData && <pre>{JSON.stringify(userData, null, 2)}</pre>}
    </div>

    <div>Category</div>
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Invoices</h1>
          <p className="mt-2">Manage and track your recent invoices</p>
        </div>

        {/* Table Card */}
        <div className="rounded-lg shadow-lg overflow-hidden border">
          <Table>
            <TableCaption className="p-4">
              A list of your recent invoices.
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">{invoice.invoice}</TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-right font-semibold">{invoice.totalAmount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3} className="font-semibold">Total</TableCell>
                <TableCell className="text-right font-bold text-lg">$2,250.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </div>
    </>
  );
}

export default Category;


