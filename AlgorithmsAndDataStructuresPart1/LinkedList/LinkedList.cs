using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LinkedList {
    public class LinkedList<T> : IEnumerable<T> {
        public int Count { get; private set; }
        public Node<T> Head { get; private set; }
        public Node<T> Tail { get; private set;}

        public LinkedList() {
            Head = null;
            Tail = null;
        }

        public void AddHead(T value) {
            var newNode = new Node<T>(value);

            if (Head == null) {
                Head = newNode;
                Tail = newNode;
                return;
            }

            newNode.Next = Head;
            Head = newNode;

            Count++;
        }

        public void AddTail(T value) {
            var newNode = new Node<T>(value);

            if (Head == null) {
                Head = newNode;
                Tail = newNode;
                return;
            }

            Tail.Next = newNode;
            Tail = newNode;

            Count++;
        }

        public void RemoveHead() {
            if (Head == null) {
                return;
            }

            if (Head == Tail) {
                Head = null;
                Tail = null;
                return;
            }

            Head = Head.Next;

            Count--;
        }

        public void RemoveTail() {
            if (Head == null) {
                return;
            }

            if (Head == Tail) {
                Head = null;
                Tail = null;
                return;
            }

            // traverse the list until the second to last node is found
            var currentNode = Head;
            while (currentNode.Next != Tail) {
                currentNode = currentNode.Next;
            }

            Tail = currentNode;
            Tail.Next = null;

            Count--;
        }

        public override string ToString() {
            var output = new StringBuilder();

            var currentNode = Head;
            while (currentNode != null) {
                output.Append(currentNode.Value);
                output.Append("->");
                currentNode = currentNode.Next;
            }
            output.Append("null");

            return output.ToString();
        }

        public IEnumerator<T> GetEnumerator() {
            throw new NotImplementedException();
        }

        private System.Collections.IEnumerator System.Collections.IEnumerable.GetEnumerator() {
            throw new NotImplementedException();
        }

        private IEnumerator<T> IEnumerable.GetEnumerator()
    }
}
