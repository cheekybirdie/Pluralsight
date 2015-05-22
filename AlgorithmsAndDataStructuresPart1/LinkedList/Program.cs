using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinkedList {
    class Program {
        static void Main(string[] args) {
            LinkedListDemo();
        }

        private static void LinkedListDemo() {
            var numbers = new LinkedList<int>();
            numbers.AddHead(8);
            numbers.AddHead(4);
            numbers.AddHead(2);
            numbers.AddHead(1);
            Console.WriteLine(numbers.ToString());

            foreach (var nbr in numbers) {
                Console.WriteLine("number: " + nbr.value);
            }

            var words = new LinkedList<string>();
            words.AddTail("four");
            words.AddTail("score");
            words.AddTail("and");
            words.AddTail("seven");
            words.AddTail("years");
            words.AddTail("ago");
            Console.WriteLine(words.ToString());
            words.RemoveHead();
            Console.WriteLine(words.ToString());
            words.RemoveHead();
            Console.WriteLine(words.ToString());
            words.RemoveTail();
            Console.WriteLine(words.ToString());
            words.RemoveTail();
            Console.WriteLine(words.ToString());
            words.RemoveTail();
            Console.WriteLine(words.ToString());
            words.RemoveTail();
            Console.WriteLine(words.ToString());
            words.RemoveTail();
            Console.WriteLine(words.ToString());
            words.RemoveTail();
            words.RemoveTail();
            words.RemoveHead();
            Console.WriteLine(words.ToString());
        }

        static void ChainDemo() {
            Node<int> head = new Node<int>(3);

            head.Next = new Node<int>(5);
            head.Next.Next = new Node<int>(7);

            DisplayChain(head);

            Console.ReadKey();
        }

        static void DisplayChain(Node<int> node) {
            while (node != null) {
                Console.WriteLine("value: " + node.Value);
                node.Value *= 2;
                node = node.Next;
            }

            var foo = new Node<int>(2839);
            node = foo;
        }
    }
}
